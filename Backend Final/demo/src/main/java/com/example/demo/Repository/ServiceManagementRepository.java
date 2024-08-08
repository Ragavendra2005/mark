package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.ServiceManagement;

@Repository
public interface ServiceManagementRepository extends JpaRepository<ServiceManagement, Long> {
}
