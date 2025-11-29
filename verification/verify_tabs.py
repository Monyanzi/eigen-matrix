from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:8080")

            # Wait for the Strategic Frameworks section to be visible
            # It might take a moment for the page to render
            page.wait_for_selector("text=Strategic Frameworks", timeout=10000)

            # Scroll to the element to ensure it is in view for the screenshot
            element = page.get_by_text("Strategic Frameworks")
            element.scroll_into_view_if_needed()

            # Take a screenshot of the Strategic Frameworks section
            # We can try to locate the section wrapper
            section = page.locator("section").filter(has_text="Strategic Frameworks")

            # Ensure the tabs are visible
            expect(page.get_by_role("tab", name="Strategic Vision")).to_be_visible()
            expect(page.get_by_role("tab", name="Operational Precision")).to_be_visible()
            expect(page.get_by_role("tab", name="Digital Future")).to_be_visible()

            # Screenshot the specific section
            section.screenshot(path="verification/strategic_frameworks.png")

            # Also click on a different tab to verify content switching
            page.get_by_role("tab", name="Operational Precision").click()
            page.wait_for_timeout(500) # Wait for animation
            section.screenshot(path="verification/operational_precision.png")

        except Exception as e:
            print(f"Error: {e}")
            # Take a full page screenshot for debugging
            page.screenshot(path="verification/error_debug.png", full_page=True)
        finally:
            browser.close()

if __name__ == "__main__":
    run()
