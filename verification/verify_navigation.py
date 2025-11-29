from playwright.sync_api import sync_playwright

def verify_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        try:
            page.goto("http://localhost:8080")
            print("Loaded homepage")

            # 1. Verify Login Link
            page.get_by_role("link", name="Client Login").click()
            page.wait_for_url("**/login")
            print("Navigated to Login")
            page.screenshot(path="verification/login_page.png")

            # Go back
            page.goto("http://localhost:8080")

            # 2. Verify Expertise Link (Nav to Section)
            page.get_by_role("link", name="View Our Expertise").click()
            page.wait_for_timeout(1000)
            if "#expertise" in page.url:
                print("Navigated to Expertise section")
            else:
                print(f"Failed to navigate to Expertise section. URL: {page.url}")
            page.screenshot(path="verification/expertise_section.png")

            # 3. Verify Learn More Link
            page.goto("http://localhost:8080")
            page.locator("a", has_text="Learn more").first.click()
            page.wait_for_url("**/services/**")
            print("Navigated to Service Detail")
            page.screenshot(path="verification/service_detail.png")

            # 4. Verify Industry Link (Select the card specifically)
            page.goto("http://localhost:8080")
            # The industry card has "View Case Studies" text on hover, but we can target the link wrapping the title.
            # Or just use the first link that contains "Financial Services" which isn't the footer.
            # The footer links are list items.

            # Use a more specific locator for the grid section
            industry_section = page.locator("#industries")
            industry_section.get_by_text("Financial Services").click()

            page.wait_for_url("**/industries/financial-services")
            print("Navigated to Financial Services Industry")
            page.screenshot(path="verification/industry_detail.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_navigation()
