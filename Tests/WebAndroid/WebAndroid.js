
function Test()
{
	Android.DoStartVideoRecording();
    
	if (!SeSConnectMobile())
	{
		return;
	}

	Android.DoGoToUrl("http://www.libraryinformationsystem.org");

	Global.DoSleep(3000);
	
	Android.DoScreenshot();
	
	TestCreateNewBook();
	
	Global.DoSleep(3000);    
	
	Android.DoStopVideoRecording();	
}

g_load_libraries=["Mobile"];


