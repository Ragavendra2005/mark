package com.example.demo.Controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Contact;
import com.example.demo.Service.ContactService;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }
    
    @PutMapping("/{id}/verify")
    public Contact verifyContact(@PathVariable Long id, @RequestBody Contact contact) {
        Contact existingContact = contactService.findById(id);
        if (existingContact != null) {
            existingContact.setVerified(contact.isVerified());
            return contactService.saveContact(existingContact);
        }
        return null;
    }
}