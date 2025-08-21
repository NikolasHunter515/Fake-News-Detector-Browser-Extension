import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found")

genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.5-flash')

def analyze_headline_with_gemini(text_to_analyze: str) -> str:
    try:
        prompt = f"""
        Analyze the following news article headline and determine if it is likely to be fake news.
        Provide a brief explanation for your reasoning.
        At the end of your analysis, please make sure the last word is "fake" or "real".

        Article: "{text_to_analyze}"

        Analysis:
        """
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"An error occurred: {e}")
        return "Error: Could not get a response from the API."
