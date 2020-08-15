

import 'package:flutter/material.dart';

import '../widgets/auto_trace_card.dart';
import '../widgets/record_visit_card.dart';
import '../widgets/button_bar_bottom.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dashboard'),
        centerTitle: true,
      ),
      // persistentFooterButtons: [

      //   RaisedButton(onPressed: () {}, child: Text('Hello'))
      // ],
      body: Container(
        child: Padding(
          padding: EdgeInsets.only(top: 8),
          child: Column(
            children: [
              Expanded(
                child: Padding(
                  padding: EdgeInsets.only(left: 32, right: 32),
                  child: ListView(children: [
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
                      child: AutoTraceCard(),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(16),
                      child: RecordVisitCard(),
                    ),
                  ]),
                ),
              ),
              ButtonBarBottom()
            ],
          ),
        ),
      ),
    );
  }
}

