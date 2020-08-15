import 'package:flutter/material.dart';

class AutoTraceCard extends StatelessWidget {
  const AutoTraceCard({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      shadowColor: Colors.black,
      elevation: 5,
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
                      AssetImage('images/auto_logo.png'),
                ),
              ),
            ),
          ),
          const ListTile(
            title: Padding(
              padding: const EdgeInsets.all(16),
              child: Center(
                  child: Text(
                "Enable Auto-Trace",
                style: TextStyle(fontWeight: FontWeight.bold),
              )),
            ),
            subtitle: Padding(
              padding: const EdgeInsets.all(16),
              child: Center(
                child: Text(
                    'Enabling Auto-Trace will allow the app to sutomatically log your interactions with public transport'),
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
                          'Enable Auto-Trace',
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
    );
  }
}
