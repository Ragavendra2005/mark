package com.example.demo.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Contact;
import com.example.demo.Repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
    public Contact findById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }
    // public Optional<Contact> findById(Long id) {
    //     return contactRepository.findById(id);
    // }
}
