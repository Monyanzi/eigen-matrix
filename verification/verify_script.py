from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:4173")

        # Wait for the hero title to be visible
        page.wait_for_selector("text=The Science of Strategic Clarity")

        # Take a screenshot of the entire page
        page.screenshot(path="verification/homepage_full.png", full_page=True)

        # Take a screenshot of the Hero section
        page.set_viewport_size({"width": 1280, "height": 800})
        page.screenshot(path="verification/homepage_hero.png")

        # Scroll to "Why Us" section and take screenshot
        # Using NEW text selector
        page.locator("text=Beyond Benchmarks").scroll_into_view_if_needed()
        page.wait_for_timeout(1000) # Wait for animations
        page.screenshot(path="verification/why_us.png")

        browser.close()

if __name__ == "__main__":
    verify_homepage()
