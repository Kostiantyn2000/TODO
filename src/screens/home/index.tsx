import {IRouteParams, RootKey} from '../../typings';
import {FC} from 'react';
import {Button, Header, Layout, ListTask} from '../../components';
import {BACKGROUND, TXT_WHITE} from '../../constants';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTaskStore} from '../../store';

interface IProps extends IRouteParams {}
export const HomeScreen: FC<IProps> = ({navigation}) => {
  const {filter, onFilterTask} = useTaskStore();

  return (
    <Layout
      background={BACKGROUND}
      rerenderHeader={
        <ImageBackground
          style={{width: '100%', height: 222}}
          source={require('../../assets/img/picture-header.png')}>
          <Header title={new Date().toLocaleString()} />
          <Text style={styles.title}>My Todo List</Text>
        </ImageBackground>
      }>
      <View>
        <ScrollView
          style={{
            position: 'relative',
            top: -78,
            left: 16,
          }}>
          <ListTask />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 10,
            gap: 10,
          }}>
          <Button
            isDisabled={filter === 'all'}
            style={{width: 115}}
            textContent={'All'}
            onPress={() => onFilterTask('all')}
          />
          <Button
            isDisabled={filter === 'done'}
            style={{width: 115}}
            textContent={'Done'}
            onPress={() => onFilterTask('done')}
          />
          <Button
            isDisabled={filter === 'undone`'}
            style={{width: 115}}
            textContent={'UnDone'}
            onPress={() => onFilterTask('undone')}
          />
        </View>
        <View style={{paddingHorizontal: 16}}>
          <Button
            textContent={'Add New Task'}
            onPress={() => navigation.navigate(RootKey.taskCreate)}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 30,
    marginTop: 22,
    color: TXT_WHITE,
  },
});
