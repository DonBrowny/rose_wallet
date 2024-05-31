package com.rose_wallet.sms

import com.facebook.react.bridge.*
import android.provider.Telephony.Sms

class SMSModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    private val reactContext: ReactApplicationContext = context

    override fun getName(): String {
        return "SMSModule"
    }

    @ReactMethod
    fun getAllMessages(dateFrom: String, callback: Callback) {
        val selection = Sms.Inbox.DATE + " > ?"
        val selectionArgs = arrayOf(dateFrom)
        val cursor = reactContext.contentResolver.query(Sms.Inbox.CONTENT_URI, null, selection, selectionArgs, null)
        val messages = Arguments.createArray()

        if(cursor != null) {
            if (cursor.moveToFirst()) {
                do {
                    val msgData = Arguments.createMap()
                    msgData.putString("id", cursor.getString(cursor.getColumnIndexOrThrow(Sms.Inbox._ID)))
                    msgData.putString("address", cursor.getString(cursor.getColumnIndexOrThrow(Sms.Inbox.ADDRESS)))
                    msgData.putString("body", cursor.getString(cursor.getColumnIndexOrThrow(Sms.Inbox.BODY)))
                    msgData.putString("date", cursor.getString(cursor.getColumnIndexOrThrow(Sms.Inbox.DATE)))
                    messages.pushMap(msgData)
                } while (cursor.moveToNext())
            }
            cursor.close()
            callback.invoke(messages)
        } else {
            callback.invoke(null, "Failed to retrieve SMS message")
        }
    }
}