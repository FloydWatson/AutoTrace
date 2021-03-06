import 'package:flutter/material.dart';

import './screens/home_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AutoTrace',
      theme: ThemeData(
        primarySwatch: Colors.yellow,
        // buttonBarTheme: ButtonBarThemeData(backgroundColor: Colors.black),
        //bottomNavigationBarTheme: BottomNavigationBarThemeData(backgroundColor: Colors.black),

        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}


