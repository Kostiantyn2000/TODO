import {ImageBackground, StyleSheet, View} from 'react-native';
import {
  Button,
  CategorySelect,
  CloseIcon,
  Header,
  InputField,
  Layout,
} from '../../components';
import {BACKGROUND} from '../../constants';
import {useData} from './use-data';
import {Controller} from 'react-hook-form';
import {FC} from 'react';
import {IRouteParams} from '../../typings';

interface IProps extends IRouteParams {}
export const TaskCreateScreen: FC<IProps> = ({navigation}) => {
  const {handleSubmit, control, setValue, getValues} = useData();

  return (
    <Layout
      background={BACKGROUND}
      rerenderHeader={
        <ImageBackground
          style={{width: '100%', height: 96}}
          source={require('../../assets/img/picture-header.png')}>
          <Header
            title="Add New Task"
            iconLeft={<CloseIcon onPress={() => navigation.goBack()} />}
          />
        </ImageBackground>
      }>
      <View style={{paddingHorizontal: 16, paddingVertical: 24}}>
        <Controller
          name={'title'}
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <InputField
              label="Task Title"
              value={value}
              onChange={onChange}
              placeholder="Task Title"
              placeholderTextColor={'gray'}
              error={error?.message}
            />
          )}
        />
        <CategorySelect
          setValue={value => setValue('category', value)}
          value={getValues('category')}
        />
        <View style={styles.containerDate}>
          <Controller
            name={'time'}
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <InputField
                style={{width: 175}}
                label="Time"
                value={value || ''}
                onChange={onChange}
                placeholder="Time"
                placeholderTextColor={'gray'}
                error={error?.message}
              />
            )}
          />
          <Controller
            name={'date'}
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <InputField
                style={{width: 175}}
                label="Date"
                value={value || ''}
                onChange={onChange}
                placeholder="Date"
                placeholderTextColor={'gray'}
                error={error?.message}
              />
            )}
          />
        </View>
        <Controller
          name={'note'}
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <InputField
              style={styles.descriptionInput}
              label="Notes"
              value={value || ''}
              onChange={onChange}
              placeholder="Notes"
              placeholderTextColor={'gray'}
              inputProps={{
                multiline: true,
              }}
              error={error?.message}
            />
          )}
        />
        <Button
          style={{marginTop: 80}}
          textContent="Save"
          onPress={() => handleSubmit()}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  descriptionInput: {
    height: 150,
    paddingTop: 16,
    textAlignVertical: 'top',
  },
});
