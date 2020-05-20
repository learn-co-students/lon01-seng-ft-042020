require 'test_helper'

class DestinationsControllerTest < ActionDispatch::IntegrationTest
  test "should get Posts" do
    get destinations_Posts_url
    assert_response :success
  end

end
