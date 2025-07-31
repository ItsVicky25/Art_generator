package com.artgenerator.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ImageTransformRequest {
    
    @NotBlank(message = "Image data is required")
    @JsonProperty("imageData")
    private String imageData;
    
    @NotNull(message = "Transform type is required")
    @JsonProperty("transformType")
    private String transformType;
    
    @JsonProperty("intensity")
    private Integer intensity = 50;
    
    @JsonProperty("style")
    private String style;
    
    public ImageTransformRequest() {}
    
    public ImageTransformRequest(String imageData, String transformType) {
        this.imageData = imageData;
        this.transformType = transformType;
    }
    
    // Getters and Setters
    public String getImageData() {
        return imageData;
    }
    
    public void setImageData(String imageData) {
        this.imageData = imageData;
    }
    
    public String getTransformType() {
        return transformType;
    }
    
    public void setTransformType(String transformType) {
        this.transformType = transformType;
    }
    
    public Integer getIntensity() {
        return intensity;
    }
    
    public void setIntensity(Integer intensity) {
        this.intensity = intensity;
    }
    
    public String getStyle() {
        return style;
    }
    
    public void setStyle(String style) {
        this.style = style;
    }
}