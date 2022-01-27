import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

type PropsType = {

};

type StateType = {
    activeIndex: number,
    carouselItems: Array<any>,
}

export default class index extends React.Component<PropsType, StateType> {

    carousel;

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              valor: "5.670.300,00 Kz",
              text: "Conta Corrente",
          },
          {
              title:"Item 2",
              valor: "5.670.300,00 Kz",
              text: "Conta Univesitária",
          },
          {
              title:"Item 3",
              valor: "5.670.300,00 Kz",
              text: "Conta de Crédito",
          },
          {
              title:"Item 4",
              valor: "5.670.300,00 Kz",
              text: "Conta Sálario",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'white',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#B39659',
              height: 200,
              padding: 30,
              marginLeft: 0,
              marginRight: 0, }}>
                <Text style={{fontSize: 23, marginTop: '5%'}}>{item.valor}</Text>
                <Text style={{fontSize: 17, marginTop:'5%'}}>{'AO06.0000.0000.0000.0000.0'}</Text>
                <Text style={{marginTop: '5%', fontSize: 16}}>{item.text}</Text>
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 10, paddingBottom: 10 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel 
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={370}
                  itemWidth={320}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
