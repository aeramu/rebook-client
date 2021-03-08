import React from 'react'
import {Button, View, Text, StyleSheet } from 'react-native'

import {gql, useQuery} from '@apollo/client'

export default (props) => {
    const {bookID, style} = props
    const [page, setPage] = React.useState(1)
    const [totalPage, setTotalPage] = React.useState(1)

    const {data, loading} = useQuery(GET_BOOK_BY_ID_SUMMARY, {
        variables:{
            id: bookID,
            page: page,
        }
    })

    React.useEffect(() => {
        if (data && (data.getBookByID.summary.totalPage != 0)) {
            setTotalPage(data.getBookByID.summary.totalPage)
        }
    }, [data])

    const onNextPress = () => {
        setPage(page + 1)
    }

    const onPreviousPress = () => {
        setPage(page - 1)
    }

    return (
        <View style={style}>
            <View style={styles.textContainer}>
            {
                loading
                ? <Text>Loading...</Text>
                : <Text>{data.getBookByID.summary.text}</Text>
            }
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Previous"
                    onPress={onPreviousPress}
                    disabled={page == 1}
                />
                <Text>
                    {page + '/' + totalPage}
                </Text>
                <Button
                    title="Next"
                    onPress={onNextPress}
                    disabled={page >= totalPage}
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
    textContainer:{
        flex:1
    }
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