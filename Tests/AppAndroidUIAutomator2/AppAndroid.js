
function Test()
{
	RVL.DoPlayScript("AppAndroid.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

function TestPrepare()
{
	AppiumDriver.ReconnectSession(true);
	if (g_entryPointName == "Test")
	{
		AppiumDriver.StartRecordingScreen();
	}
}

function TestFinish()
{
	if(Tester.GetTestStatus() != Tester.Pass)
	{
		Android.DoScreenshot();
	}

	if (g_entryPointName == "Test")
	{
		AppiumDriver.StopRecordingScreen();
		AppiumDriver.Quit();
	}
}

g_load_libraries=["Mobile"];


