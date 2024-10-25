
function Test()
{
	RVL.DoPlayScript("AppAndroid.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["Mobile"];


