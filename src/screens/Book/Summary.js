import React from 'react'
import {Button, View, Text, StyleSheet } from 'react-native'

export default (props) => {
    const {style} = props
    return (
        <View style={style}>
            <Text>{text}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Previous"
                />
                <Button
                    title="Next"
                />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
    },
});
const text = ` Lorem Ipsum 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet venenatis arcu. Pellentesque sit amet ligula ut metus convallis placerat a sit amet nisi. Sed id pretium mi. Sed eu vestibulum libero, aliquam posuere neque. Nulla tincidunt non justo et malesuada. Etiam tempus elementum metus eget venenatis. Sed ut vestibulum arcu, nec consectetur turpis. Maecenas eu sem sed erat tempor sodales. Integer interdum dolor id erat ornare pharetra. Nulla facilisi. Fusce tincidunt nulla ut neque finibus, in tincidunt augue aliquet. Nam commodo suscipit ante vitae lacinia.

Duis pharetra elit non consequat tempor. Donec dignissim eros id odio sollicitudin mollis. Nunc sit amet ligula at neque facilisis cursus nec sed lacus. Praesent dignissim tortor efficitur orci malesuada, quis ultrices risus mattis. Mauris posuere sem eleifend, accumsan odio vel, convallis dui. Pellentesque vestibulum nunc a tortor pulvinar, vitae mollis neque commodo. Aliquam sollicitudin ornare tellus, sed condimentum erat elementum id. Maecenas porttitor sapien eget augue ultrices, at gravida tortor commodo. Quisque faucibus eleifend dapibus. Aenean dapibus est non odio interdum aliquam. Vestibulum augue enim, pretium vel rhoncus eu, accumsan non ligula. Morbi mollis dictum porta. Aliquam accumsan, magna sit amet malesuada auctor, ante sem suscipit sem, in tincidunt quam magna quis magna. Praesent id laoreet dui, vel lacinia odio. Fusce ut semper turpis. Donec aliquet, elit dignissim imperdiet blandit, dui libero consectetur ex, et cursus ligula nibh a quam.

Curabitur commodo consequat ornare. In lacinia ipsum sit amet enim tempor placerat. Curabitur semper, lorem vitae vulputate fermentum, lacus est vestibulum orci, vel congue diam orci eget dolor. Ut sem turpis, interdum ut ultrices vitae, viverra nec urna. Pellentesque ornare convallis erat, et consequat nunc sagittis sit amet. Etiam posuere laoreet nibh sit amet tristique. Nullam vulputate varius dictum. Pellentesque cursus interdum viverra. Aliquam ac libero hendrerit ligula imperdiet hendrerit in ac leo. Curabitur commodo nisi id maximus tincidunt.

Ut at purus a tortor condimentum consectetur finibus at nibh. Proin diam nibh, aliquet nec erat vel, sodales pulvinar leo. In in porttitor sem. Donec et nibh non velit gravida fermentum. Praesent ullamcorper tellus ac ligula semper, vitae porta velit euismod. Duis luctus nunc quis sapien iaculis iaculis. Fusce eros mi, facilisis quis rutrum quis, efficitur ut risus. Sed eget elit risus. Aenean rhoncus viverra nibh, at lobortis sapien feugiat vel. Nunc convallis purus in mollis imperdiet. Vivamus in varius nisl.

Praesent rutrum pharetra aliquet. Sed ornare neque ligula. Curabitur a faucibus mi. Etiam faucibus eget eros ut dictum. Etiam ac aliquet sem, et tempor ipsum. Vivamus eu diam tortor. Vivamus ultricies commodo justo. Pellentesque fermentum facilisis aliquet. Etiam placerat consequat sem, vitae rutrum neque rutrum at. Proin tempor viverra enim imperdiet suscipit. Integer ut dapibus mi, ac maximus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lobortis nulla quis nibh sagittis lobortis. Nullam sed fermentum tellus, non gravida risus. Ut efficitur euismod metus, in ornare dui. Quisque rutrum augue non quam vestibulum volutpat.`