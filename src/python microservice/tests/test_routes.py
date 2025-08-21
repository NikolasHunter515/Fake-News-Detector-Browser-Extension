import unittest
import json
from routes import app

class RoutesTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_home_route(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Fake News Detector microservice is running.', response.data)

    def test_analyze_route_valid(self):
        response = self.app.post('/analyze', data=json.dumps({'text': 'The moon is made of cheese.'}), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'result', response.data)

if __name__ == '__main__':
    unittest.main()
