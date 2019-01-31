
function Test()
{
	if (!SeSConnectMobile())
	{
		return;
	}
	
	TestLogin();	
	TestListView();
	
	TestSpinner();
	TestButtons();	
	TestBars();
	TestViews();	

	Global.DoSleep(3000);
}

g_load_libraries=["Mobile"];


