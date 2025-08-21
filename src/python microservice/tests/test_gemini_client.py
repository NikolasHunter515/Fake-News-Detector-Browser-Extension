import unittest
from gemini_client import analyze_headline_with_gemini

class TestGeminiClient(unittest.TestCase):
    def test_fake_news_headline(self):
        headline = "Donald Trump Sent His Own Plane To Transport 200 Stranded Marines"
        result = analyze_headline_with_gemini(headline)
        self.assertIn("fake", result.lower())

    def test_real_news_headline(self):
        headline = "U.S. Economy Adds 200,000 Jobs in July"
        result = analyze_headline_with_gemini(headline)
        self.assertIn("real", result.lower())

if __name__ == '__main__':
    unittest.main()
