package com.artgenerator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageTransformResponse {
    
    @JsonProperty("success")
    private boolean success;
    
    @JsonProperty("transformedImageUrl")
    private String transformedImageUrl;
    
    @JsonProperty("transformedImageData")
    private String transformedImageData;
    
    @JsonProperty("message")
    private String message;
    
    @JsonProperty("processingTime")
    private long processingTime;
    
    public ImageTransformResponse() {}
    
    public ImageTransformResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
    
    public ImageTransformResponse(boolean success, String transformedImageUrl, String transformedImageData, String message, long processingTime) {
        this.success = success;
        this.transformedImageUrl = transformedImageUrl;
        this.transformedImageData = transformedImageData;
        this.message = message;
        this.processingTime = processingTime;
    }
    
    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }
    
    public void setSuccess(boolean success) {
        this.success = success;
    }
    
    public String getTransformedImageUrl() {
        return transformedImageUrl;
    }
    
    public void setTransformedImageUrl(String transformedImageUrl) {
        this.transformedImageUrl = transformedImageUrl;
    }
    
    public String getTransformedImageData() {
        return transformedImageData;
    }
    
    public void setTransformedImageData(String transformedImageData) {
        this.transformedImageData = transformedImageData;
    }
    
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public long getProcessingTime() {
        return processingTime;
    }
    
    public void setProcessingTime(long processingTime) {
        this.processingTime = processingTime;
    }
}