package com.example.demo.Repository;

import com.example.demo.Entity.OrderManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderManagementRepository extends JpaRepository<OrderManagement, Long> {
}
