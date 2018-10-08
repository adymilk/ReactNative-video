package com.helloworld;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.BV.LinearGradient.LinearGradientPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.helloworld.UMeng.DplusReactPackage;
import com.helloworld.UMeng.PushModule;
import com.helloworld.UMeng.RNUMConfigure;
import com.oblador.vectoricons.VectorIconsPackage;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.umeng.commonsdk.UMConfigure;
import com.umeng.message.PushAgent;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LinearGradientPackage(),
            new OrientationPackage(),
            new KCKeepAwakePackage(),
            new ReactVideoPackage(),
              //新添加的
              new VectorIconsPackage(),
              new DplusReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }


  @Override
  public void onCreate() {
    super.onCreate();

    SoLoader.init(this, /* native exopackage */ false);

    //    友盟初始化
    UMConfigure.setLogEnabled(true);
    RNUMConfigure.init(this, "5bbb333fb465f5db06000152", "Umeng", UMConfigure.DEVICE_TYPE_PHONE,
            "669c30a9584623e70e8cd01b0381dcb4");





  }

}

