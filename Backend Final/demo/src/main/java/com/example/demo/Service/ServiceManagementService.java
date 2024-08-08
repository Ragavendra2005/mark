package com.example.demo.Service;

import com.example.demo.Entity.ServiceManagement;
import com.example.demo.Repository.ServiceManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceManagementService {

    @Autowired
    private ServiceManagementRepository serviceManagementRepository;

    public List<ServiceManagement> getAllServices() {
        return serviceManagementRepository.findAll();
    }

    public Optional<ServiceManagement> getServiceById(Long id) {
        return serviceManagementRepository.findById(id);
    }

    public ServiceManagement addService(ServiceManagement serviceManagement) {
        return serviceManagementRepository.save(serviceManagement);
    }

    public ServiceManagement updateService(ServiceManagement serviceManagement) {
        return serviceManagementRepository.save(serviceManagement);
    }

    public void deleteService(Long id) {
        serviceManagementRepository.deleteById(id);
    }
}
