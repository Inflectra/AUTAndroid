//Put your custom functions and variables in this file

function GetAppiumNonProfileCapabilities(profile)
{
    var caps = {};
    
	// set capabilities based on a profile name
    if (profile == "Android Browser Simulator")
    {
        caps["goog:chromeOptions"] = {"args": ["no-sandbox"]};
    }
    
    return caps;
}