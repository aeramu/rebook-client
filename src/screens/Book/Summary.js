import React from 'react'
import {Button, View, Text, StyleSheet } from 'react-native'

import {gql, useQuery} from '@apollo/client'

export default (props) => {
    const {bookID, style} = props
    const [page, setPage] = React.useState(1)

    const {data, loading} = useQuery(GET_BOOK_BY_ID_SUMMARY, {
        variables:{
            id: bookID,
            page: page,
        }
    })

    const onNextPress = () => {
        setPage(page + 1)
    }

    const onPreviousPress = () => {
        setPage(page - 1)
    }

    return (
        <View style={style}>
            {
                loading
                ? <Text>Loading...</Text>
                : <Text>{data.getBookByID.summary.text}</Text>
            }
            <View style={styles.buttonContainer}>
                <Button
                    title="Previous"
                    onPress={onPreviousPress}
                    disabled={page == 1}
                />
                <Text>
                    {page + '/' + (data? data.getBookByID.summary.totalPage : 1)}
                </Text>
                <Button
                    title="Next"
                    onPress={onNextPress}
                    disabled={page >= (loading? 1 : data.getBookByID.summary.totalPage)}
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

const GET_BOOK_BY_ID_SUMMARY = gql`
    query($id: ID!, $page: Int!){
        getBookByID(id: $id){
            summary(page: $page){
                text
                totalPage
            }
        }
    }
`