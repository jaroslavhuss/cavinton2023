import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';

const Spc = () => {
    const [loadComponent, setLoadComponent] = useState<boolean>(false)
    let pdf = require("../assets/pdf.pdf");
    useFocusEffect(() => {
        setLoadComponent(true)
        return () => {
            setLoadComponent(false)
        }
    })
    return (
        <>
            <View style={{ width: "100%", height: "100%" }}>
                {
                    loadComponent && <WebView
                        originWhitelist={["file://*", "http://*", "https://*"]}
                        source={pdf}
                        allowFileAccess
                        allowUniversalAccessFromFileURLs
                        allowFileAccessFromFileURLs
                    ></WebView>
                }

            </View>
        </>
    )
}

export default Spc

const styles = StyleSheet.create({})