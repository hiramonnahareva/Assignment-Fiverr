function UserDashboard() {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
  
        <div className="bg-white p-6 shadow-md rounded-md">
          {/* Referral Progress */}
          <h2 className="text-xl font-bold mb-2">Referral Progress</h2>
          <p className="text-gray-600">Track your referral rewards</p>
          <div className="my-4">
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-black h-4 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span>$75 / $100 to next reward</span>
              <span>$75</span>
            </div>
          </div>
          <p>3 friends referred</p>
          <button className="px-4 py-2 bg-black text-white rounded-md mt-4">
            Invite More Friends
          </button>
        </div>
      </div>
    );
  }
  
  export default UserDashboard;
  