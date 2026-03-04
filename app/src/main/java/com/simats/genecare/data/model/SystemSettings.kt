package com.simats.genecare.data.model

import com.google.gson.annotations.SerializedName

data class SystemSettingsResponse(
    @SerializedName("status") val status: String,
    @SerializedName("settings") val settings: Map<String, String>
)

data class UpdateSystemSettingRequest(
    @SerializedName("setting_key") val settingKey: String,
    @SerializedName("setting_value") val settingValue: String
)
