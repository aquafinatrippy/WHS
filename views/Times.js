import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Times = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <View>
      <View style={styles.timeContainer}>
        <Text style={styles.title}>Work start time</Text>
        <TextInput editable={false} value={startDate.toString()} />
        <DatePicker onDateChange={setStartDate} date={startDate} />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.title}>Work end time</Text>
        <TextInput editable={false} value={endDate.toString()} />
        <DatePicker onDateChange={setEndDate} date={endDate} />
      </View>
      <Button title="Add time" />
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 10,
    fontSize: 20,
  },
});

export default Times;
