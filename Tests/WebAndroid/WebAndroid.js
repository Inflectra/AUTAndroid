
function Test()
{
	RVL.DoPlayScript("WebAndroid.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

function TestFinish()
{
	if(Tester.GetTestStatus() != Tester.Pass)
	{
		Android.DoScreenshot();
	}

	if (g_entryPointName == "Test")
	{
		AppiumDriver.Quit();
	}
}

g_load_libraries=["Mobile"];


