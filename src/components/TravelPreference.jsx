import { useState } from "react";

function TravelPreferences() {
    const [budget, setBudget] = useState(1300);
  
    return (
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Travel Preferences</h1>
  
        <form className="space-y-4">
          {/* Purpose of Visit */}
          <div>
            <label className="block text-sm">Purpose of Visit</label>
            <select className="block w-full p-2 border rounded-md">
              <option>Vacation</option>
              <option>Business</option>
              <option>Family</option>
            </select>
          </div>
  
          {/* Duration */}
          <div>
            <label className="block text-sm">Duration</label>
            <select className="block w-full p-2 border rounded-md">
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>1-2 Weeks</option>
            </select>
          </div>
  
          {/* Interests */}
          <div>
            <label className="block text-sm">Interests</label>
            <div className="flex flex-wrap space-x-2">
              <label><input type="checkbox" /> Music</label>
              <label><input type="checkbox" /> Food</label>
              <label><input type="checkbox" /> Art</label>
              <label><input type="checkbox" /> Sports</label>
              <label><input type="checkbox" /> Nightlife</label>
            </div>
          </div>
  
          {/* Budget */}
          <div>
            <label className="block text-sm">Budget (USD)</label>
            <input
              type="range"
              min="500"
              max="5000"
              value={budget}
              onChange={e => setBudget(e.target.value)}
              className="w-full"
            />
            <p className="text-sm">Budget: ${budget}</p>
          </div>
  
          {/* Submit */}
          <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">
            Submit Preferences
          </button>
        </form>
      </div>
    );
  }
  
  export default TravelPreferences;
  