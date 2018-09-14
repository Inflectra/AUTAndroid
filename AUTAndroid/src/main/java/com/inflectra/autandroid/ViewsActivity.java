package com.inflectra.autandroid;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.CheckedTextView;
import android.widget.MultiAutoCompleteTextView;

public class ViewsActivity extends Activity {

	private AutoCompleteTextView actv;
	   
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_views);
		
		String[] countries = getResources().getStringArray(R.array.list_of_countries);
	    @SuppressWarnings("rawtypes")
		ArrayAdapter adapter = new ArrayAdapter(this,android.R.layout.simple_list_item_1,countries);
	
	
	   actv = (AutoCompleteTextView) findViewById(R.id.autoCompleteTextView1);	
	   actv.setAdapter(adapter);
	   
	   
	   final CheckedTextView ctv = (CheckedTextView) findViewById(R.id.checkedTextView1);
	   ctv.setOnClickListener(new View.OnClickListener() {
	        @Override
	        public void onClick(View v) {
	            if (ctv.isChecked())
	                ctv.setChecked(false);
	            else
	                ctv.setChecked(true);
	 
	        }
	    });
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.views, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}
}
