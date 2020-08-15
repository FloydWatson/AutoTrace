import 'package:flutter/material.dart';

class ButtonBarBottom extends StatelessWidget {
  const ButtonBarBottom({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 80,
      color: Colors.black87,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 16),
            child: Column(children: [
              IconButton(
                color: Colors.white,
                onPressed: () {},
                icon: Icon(Icons.apps),
              ),
              Center(
                child: Text(
                  'DashBoard',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 16, right: 16),
            child: Column(
              children: [
                IconButton(
                    color: Colors.white,
                    onPressed: () {},
                    icon: Icon(Icons.video_label)),
                Center(
                  child: Text(
                    'Record Visit',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: Column(
              children: [
                IconButton(
                  color: Colors.white,
                  onPressed: () {},
                  icon: Icon(Icons.person),
                ),
                Center(
                  child: Text(
                    'My Profile',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

