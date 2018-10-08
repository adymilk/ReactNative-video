package com.helloworld;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.helloworld.UMeng.PushModule;
import com.umeng.analytics.MobclickAgent;
import com.umeng.message.PushAgent;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "helloworld";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //友盟推送
        PushModule.initPushSDK(this);
        MobclickAgent.setSessionContinueMillis(1000);
        MobclickAgent.setScenarioType(this, MobclickAgent.EScenarioType.E_DUM_NORMAL);
        MobclickAgent.openActivityDurationTrack(false);
        PushAgent.getInstance(this).onAppStart();


    }

    @Override
    public void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);
    }
    @Override
    protected void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }
}
