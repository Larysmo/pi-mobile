import React, { Component } from 'react';
import { View, Text } from 'react-native';


import { Calendar } from 'react-native-calendars';
import moment from 'moment';





class Calendario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataInicial: null,
      dataFinal: null,
    };
  }

  onDayPress = (day) => {
    const { dataInicial, dataFinal } = this.state;
    const selectedDate = moment(day.dateString);
    const currentDate = moment();

    if (selectedDate.isSameOrAfter(currentDate, 'day')) {
      if (!dataInicial || (dataInicial && dataFinal)) {
        // Se não há data de início ou se ambas as datas foram selecionadas, defina uma nova data de início.
        this.setState({
          dataInicial: day.dateString,
          dataFinal: null,
        });
      } else {
        // Se já há uma data de início, defina a data de fim.
        this.setState({
          dataFinal: day.dateString,
        });
      }
    }
  };

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  getSortedDates() {
    // datas selecionadas em ordem crescente.
    const { dataInicial, dataFinal } = this.state;
    const dates = [dataInicial, dataFinal].filter(Boolean);

    if (dates.length === 2 && dates[0] === dates[1]) {
    // Se as datas iniciais e finais forem iguais, retorne apenas uma delas.
    return [dates[0]];
  }
    return dates.sort((a, b) => moment(a) - moment(b));
  }


  render() {
    return (
      <View>
        <Calendar
          // Marque as datas selecionadas e o intervalo.
          markedDates={{
            [this.state.dataInicial]: {
              selected: true,
              startingDay: true,
              color: 'darkgreen',
              textColor: 'white',
              customStyles: {
                container: {
                  backgroundColor: 'darkgreen',
                },
                text: {
                  color: 'white',
                },
              },
            },
            [this.state.dataFinal]: {
              selected: true,
              endingDay: true,
              color: 'darkred',
              textColor: 'white',
              customStyles: {
                container: {
                  backgroundColor: 'darkred',
                },
                text: {
                  color: 'white',
                },
              },
            },
          }}
          // Callback para manipular a seleção de datas.
          onDayPress={this.onDayPress}
        />
        {this.state.dataInicial && this.state.dataFinal && (
          <View style={{alignItems:"center", marginTop:10}}>
            <Text>Período selecionado:</Text>
            {this.getSortedDates().map((date, index) => (
              <Text key={index}>{this.formatDate(date)}</Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default Calendario;
