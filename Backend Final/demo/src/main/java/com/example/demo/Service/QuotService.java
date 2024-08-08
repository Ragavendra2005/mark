package com.example.demo.Service;

import com.example.demo.Entity.Quot;
import com.example.demo.Repository.QuotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuotService {

    @Autowired
    private QuotRepository quotRepository;

    public void saveQuote(Quot quot) {
        quotRepository.save(quot);
    }
}