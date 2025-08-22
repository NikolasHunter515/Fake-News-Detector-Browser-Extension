from flask import Flask, request, jsonify
from gemini_client import analyze_headline_with_gemini

app = Flask(__name__)

def slug_to_headline(slug: str) -> str:
    if '.' in slug:
        slug = slug.rsplit('.', 1)[0]
    headline = slug.replace('-', ' ').title()
    return headline

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing "text" in request body.'}), 400
    
    titlecase_data = slug_to_headline(data['text'])
    result = analyze_headline_with_gemini(titlecase_data)
    return jsonify({'result': result})

@app.route('/', methods=['GET'])
def home():
    return 'Fake News Detector microservice is running.'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

