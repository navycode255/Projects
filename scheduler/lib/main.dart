import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: MySchedule(),
      ),
    ),
  );
}

const inactiveCardColor = Color.fromARGB(255, 90, 93, 99);
const activeCardColor = Color(0Xffebaa43);

enum Days {
  monday,
  tuesday,
  wednsday,
  thursday,
  friday,
  saturday,
  sunday,
  empty,
}

class MySchedule extends StatefulWidget {
  const MySchedule({super.key});

  @override
  State<MySchedule> createState() => _MyScheduleState();
}

class _MyScheduleState extends State<MySchedule> {
  Days selectedDay = Days.empty;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          color: const Color(0XFF222528),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.monday;
                  });
                },
                colour: selectedDay == Days.monday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'M',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.tuesday;
                  });
                },
                colour: selectedDay == Days.tuesday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'T',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.wednsday;
                  });
                },
                colour: selectedDay == Days.wednsday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'W',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.thursday;
                  });
                },
                colour: selectedDay == Days.thursday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'T',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.friday;
                  });
                },
                colour: selectedDay == Days.friday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'F',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.saturday;
                  });
                },
                colour: selectedDay == Days.saturday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'S',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
              Day(
                onPress: () {
                  setState(() {
                    selectedDay = Days.sunday;
                  });
                },
                colour: selectedDay == Days.sunday
                    ? activeCardColor
                    : inactiveCardColor,
                initial: const Text(
                  'S',
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
              ),
            ],
          ),
        ),
        Column(),
      ],
    );
  }
}

class Day extends StatelessWidget {
  Day({
    required this.colour,
    required this.initial,
    required this.onPress,
  });

  final Color colour;
  final Widget initial;
  final VoidCallback onPress;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPress,
      child: Container(
        margin: const EdgeInsets.all(12),
        height: 50,
        width: 50,
        decoration: BoxDecoration(
          color: colour,
          borderRadius: BorderRadius.circular(3),
        ),
        child: Center(
          child: initial,
        ),
      ),
    );
  }
}
