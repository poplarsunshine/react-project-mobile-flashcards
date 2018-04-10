import React from 'react'
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'Udacity:notification'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Test your decks!',
    body: "👋 don't forget to tet your decks for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            console.log('Permissions status:', status);
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let today = new Date()
              today.setDate(today.getDate())
              today.setHours(10)
              today.setMintutes(42)

              console.log('setLocalNotification today:', today);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: today,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
        }
    })
}
