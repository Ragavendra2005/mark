package com.example.demo.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;


import java.time.LocalDate;

@Entity
public class OrderManagement {

    @Id
    @Min(1000)
    @Max(9999)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private String dimension;
    private String mainService;
    private String innerService;
    private double amount;
    private String name;
    private LocalDate date;  // To store the current date

    // Default constructor
    public OrderManagement() {}

    // Parameterized constructor
    public OrderManagement(String productName, String dimension, String mainService, String innerService, double amount, String name) {
        this.productName = productName;
        this.dimension = dimension;
        this.mainService = mainService;
        this.innerService = innerService;
        this.amount = amount;
        this.name = name;
        this.date = LocalDate.now();  // Set the current date
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getDimension() { return dimension; }
    public void setDimension(String dimension) { this.dimension = dimension; }

    public String getMainService() { return mainService; }
    public void setMainService(String mainService) { this.mainService = mainService; }

    public String getInnerService() { return innerService; }
    public void setInnerService(String innerService) { this.innerService = innerService; }

    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
}
