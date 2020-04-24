export default () => {
  return (
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=921160041672692&autoLogAppEvents=1"
      ></script>

      <div
        className="fb-login-button"
        data-size="large"
        data-button-type="login_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="true"
        data-width=""
      ></div>
    </>
  )
}
