import React from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { GToastContainer, showToast } from './index';
import styles from './styles/app';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    showToast('I love this awesome Toast package!');
                }}>
                <Text style={styles.buttonText}>Show Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    showToast('I am a unique Toast with id = register-toast', {
                        id: 'register-toast',
                        duration: 1000,
                    });
                }}>
                <Text style={styles.buttonText}>
                    Show Unique Toast: register-toast
                </Text>
            </TouchableOpacity>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis lacus a sapien suscipit dapibus nec ac massa. Duis sed est interdum quam sagittis elementum sed in tellus. Sed eleifend vehicula metus, feugiat porttitor ex accumsan eu. Praesent aliquam porttitor ullamcorper. Vestibulum faucibus quam vel augue commodo volutpat. Morbi porttitor diam faucibus massa condimentum varius. Praesent volutpat dui lectus. Suspendisse ac nisl tristique, euismod nulla ac, pulvinar dolor. Vestibulum elementum sagittis mauris at dignissim. Etiam suscipit laoreet nibh vel lacinia. Donec ex arcu, faucibus in molestie tempor, pellentesque eget magna. Donec ullamcorper dignissim sollicitudin.\n'
                    }
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder={'Type something'}
                />

                <Text style={styles.text}>
                    {
                        'Nulla eget nulla lectus. Quisque in leo vel sapien ultricies vulputate. Aliquam libero metus, aliquam id suscipit et, facilisis non diam. Praesent vehicula faucibus sapien gravida facilisis. Fusce gravida risus enim, vitae hendrerit mi feugiat sed. Cras ligula dui, hendrerit in fringilla et, suscipit at sem. Etiam eget urna sed turpis auctor tempor ut non tellus. Quisque non est velit. Aliquam non nulla non risus facilisis posuere eget sit amet diam. Aenean cursus, libero quis dapibus tempor, urna tortor pretium odio, quis aliquam dui quam sed diam. Suspendisse sollicitudin leo vitae metus eleifend eleifend. Aliquam erat volutpat. Ut vulputate vulputate tellus non efficitur. Pellentesque et condimentum ante, nec interdum purus. Suspendisse ullamcorper tincidunt nisl, sed egestas justo.\n'
                    }
                </Text>

                <Text style={styles.text}>
                    {
                        'Cras luctus risus ipsum, quis eleifend purus auctor in. Nam et elementum mauris. Vivamus efficitur placerat nisi eget fermentum. Aenean ullamcorper eros at ipsum viverra, vitae fermentum dui fermentum. Aliquam nec vehicula turpis, sed venenatis massa. Phasellus sit amet lobortis lacus. Quisque sed mauris non ante finibus eleifend. Aliquam erat volutpat.\n'
                    }
                </Text>

                <Text style={styles.text}>
                    {
                        'Morbi nec dignissim enim, et dignissim enim. Sed sit amet tincidunt ante. Nulla sed viverra lacus. Mauris imperdiet arcu a nunc dictum varius. Nunc vulputate quam in porttitor mattis. Pellentesque eget rutrum nunc. Sed suscipit elit diam, sit amet vehicula felis venenatis ut. Morbi eleifend volutpat risus, eget vehicula ligula ultrices a.\n'
                    }
                </Text>

                <Text style={styles.text}>
                    {
                        'Nullam volutpat erat vitae dui posuere, congue venenatis est auctor. Curabitur facilisis et arcu quis dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas dui sapien, ultricies sed fringilla vel, rutrum vel tortor. Nunc volutpat sed velit vitae iaculis. Sed sit amet ligula pellentesque massa vehicula consequat sed id nibh. Morbi condimentum hendrerit magna non gravida. Nullam rhoncus nunc nec ipsum mollis, vitae iaculis felis sollicitudin. Morbi pellentesque, augue eget dapibus viverra, massa lacus faucibus odio, ut vehicula lorem nibh eget neque. Etiam aliquet hendrerit mi, a fringilla purus faucibus sit amet.'
                    }
                </Text>
            </ScrollView>

            <GToastContainer paddingBottom={40} />
        </SafeAreaView>
    );
}
