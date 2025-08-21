from flask import Flask, request, jsonify
from gemini_client import analyze_headline_with_gemini

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing "text" in request body.'}), 400
    result = analyze_headline_with_gemini(data['text'])
    return jsonify({'result': result})

@app.route('/', methods=['GET'])
def home():
    return 'Fake News Detector microservice is running.'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
