import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dashboard'),
        centerTitle: true,
      ),
      body: Container(
        child: Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: SingleChildScrollView(
            child: Container(
              child: Column(children: [
                Center(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(16, 32, 16, 32),
                    child: Text(
                      'Protect yourself, your whanau, and your community',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ),
                
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: Card(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.all(16),
                          child: CircleAvatar(
                            radius: 55,
                            backgroundColor: Colors.black,
                            child: CircleAvatar(
                              backgroundColor: Colors.white,
                              radius: 52,
                              child: CircleAvatar(
                                radius: 45,
                                backgroundColor: Colors.white,
                                backgroundImage:
                                    AssetImage('images/qrCode.png'),
                              ),
                            ),
                          ),
                        ),
                        const ListTile(
                          title: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Center(
                                child: Text(
                              "Keep track of where you've been",
                              style: TextStyle(fontWeight: FontWeight.bold),
                            )),
                          ),
                          subtitle: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Center(
                              child: Text(
                                  'Record the places you visit by scanning NZ COVID Tracer QR codes - or add them manually - using the app'),
                            ),
                          ),
                        ),
                        Center(
                          child: Container(
                            width: double.infinity,
                            child: Padding(
                              padding: const EdgeInsets.all(16),
                              child: GestureDetector(
                                onTap: () {/* ... */},
                                child: Container(
                                  decoration:
                                      BoxDecoration(color: Colors.black),
                                  child: Center(
                                    child: Padding(
                                      padding: const EdgeInsets.all(16),
                                      child: const Text(
                                        'Record a visit',
                                        style: TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: Card(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.all(16),
                          child: CircleAvatar(
                            radius: 55,
                            backgroundColor: Colors.black,
                            child: CircleAvatar(
                              backgroundColor: Colors.white,
                              radius: 52,
                              child: CircleAvatar(
                                radius: 45,
                                backgroundColor: Colors.white,
                                backgroundImage:
                                    AssetImage('images/qrCode.png'),
                              ),
                            ),
                          ),
                        ),
                        const ListTile(
                          title: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Center(
                                child: Text(
                              "Keep track of where you've been",
                              style: TextStyle(fontWeight: FontWeight.bold),
                            )),
                          ),
                          subtitle: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Center(
                              child: Text(
                                  'Record the places you visit by scanning NZ COVID Tracer QR codes - or add them manually - using the app'),
                            ),
                          ),
                        ),
                        Center(
                          child: Container(
                            width: double.infinity,
                            child: Padding(
                              padding: const EdgeInsets.all(16),
                              child: GestureDetector(
                                onTap: () {/* ... */},
                                child: Container(
                                  decoration:
                                      BoxDecoration(color: Colors.black),
                                  child: Center(
                                    child: Padding(
                                      padding: const EdgeInsets.all(16),
                                      child: const Text(
                                        'Record a visit',
                                        style: TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ]),
            ),
          ),
        ),
      ),
    );
  }
}
