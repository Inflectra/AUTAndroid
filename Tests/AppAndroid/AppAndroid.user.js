//Put your custom functions and variables in this file

function TestListView()
{
	Tester.Message("LIST VIEW");
	var listView = SeS('listViewContents');	

	var itemCount = listView.GetChildCount();
	Tester.AssertEqual("Item count is 5", itemCount, 5);
	
	var item = listView.GetChildAt(0);
	Tester.AssertEqual("Item name is 'Login'", item.GetText(), "Login");
	
	for(var i = 0; i < itemCount; i++)
	{
		var item = listView.GetChildAt(i);
		Tester.Message(item.GetText());
	}
	
	var index = listView.GetItemIndexByName("Login");
	Tester.AssertEqual('Login index is 0', index, 0);
	
	listView.DoSelectItem(0);
	Android.DoPressBack();
}

function TestLogin()
{
	var listView = SeS('listViewContents');	
	listView.DoSelectItem(listView.GetItemIndexByName('Login'));
	Tester.Message("LOGIN");
	SeS('edit_username').DoSendKeys('User');
	SeS('edit_password').DoSendKeys('pwd');
	SeS('Login').DoClick();
	Tester.AssertEqual("Login successfull", SeS('label_status').GetText(), "User/pwd");
	Android.DoPressBack();
	var devName = Android.GetCapability("deviceName");
	if (devName != "Android Emulator")
	{
		Android.DoPressBack();
	}
	Global.DoSleep(3000);
}

function TestSpinner()
{
	var listView = SeS('listViewContents');	
	listView.DoSelectItem(listView.GetItemIndexByName('DropDownSelect'));
	Tester.Message("SPINNER");
	Tester.AssertEqual("Mercury selected", SeS('label_selecteditem').GetText(), "Mercury");
	SeS('spinner_items').DoSelectItem("Earth");
	Tester.AssertEqual("Earth selected", SeS('label_selecteditem').GetText(), "Earth");
	Android.DoPressBack();	
}

function TestButtons()
{
	var listView = SeS('listViewContents');	
	listView.DoSelectItem(listView.GetItemIndexByName('Buttons'));
	
	// Button
	Tester.Message("BUTTON");
	SeS('button1').DoClick();
	
	// CheckBox
	Tester.Message("CHECKBOX");
	Tester.AssertEqual("Unchecked", SeS('checkBox1').GetChecked(), false);
	SeS('checkBox1').DoSetCheck(true);
	Tester.AssertEqual("Checked", SeS('checkBox1').GetChecked(), true);
	
	// Radio
	Tester.Message("RADIO");
	SeS('radio1').DoSetCheck(true);
	Tester.AssertEqual("Unchecked", SeS('radio0').GetChecked(), false);
	Tester.AssertEqual("Checked", SeS('radio1').GetChecked(), true);
	
	// Toggle
	Tester.Message("TOGGLE");
	Tester.AssertEqual("Unchecked", SeS('toggleButton1').GetChecked(), false);
	SeS('toggleButton1').DoSetCheck(true);
	Tester.AssertEqual("Checked", SeS('toggleButton1').GetChecked(), true);

	// Switch
	Tester.Message("SWITCH");
	Tester.AssertEqual("Unchecked", SeS('switch1').GetChecked(), false);
	SeS('switch1').DoSetCheck(true);
	Tester.AssertEqual("Checked", SeS('switch1').GetChecked(), true);
	
	// ImageButton
	Tester.Message("IMAGEBUTTON");
	SeS('imageButton1').DoClick();
	
	// ImageView
	Tester.Message("IMAGEVIEW");
	SeS('imageView1').DoClick();
	
	Android.DoPressBack();	
}

function TestBars()
{
	var listView = SeS('listViewContents');	
	listView.DoSelectItem(listView.GetItemIndexByName('Bars'));
	
	Tester.Message("Progress value: " + SeS('progressBar1').GetValue());
	Tester.Message("Progress value: " + SeS('ratingBar1').GetValue());
	Tester.Message("Progress value: " + SeS('seekBar1').GetValue());

	Android.DoPressBack();	
}

function TestViews()
{
	var listView = SeS('listViewContents');	
	listView.DoSelectItem(listView.GetItemIndexByName('Views'));

	Tester.Message("AUTO COMPLETE");
	SeS('autoCompleteTextView1').DoSetText('Italy');
	
	Tester.Message("CHECKED TEXT VIEW");
	Tester.AssertEqual("Unchecked", SeS('checkedTextView1').GetChecked(), false);
	SeS('checkedTextView1').DoSetCheck(true);
	Tester.AssertEqual("Checked", SeS('checkedTextView1').GetChecked(), true);	

	Android.DoPressBack();	
}


