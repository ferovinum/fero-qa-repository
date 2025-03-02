package com.ferovinum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ferovinum.model.Stock;
import com.ferovinum.repository.StockRepository;

@RestController
@RequestMapping("/stocks")
@CrossOrigin(origins = "http://localhost:4000")
public class StockController {
    
    @Autowired
    private StockRepository stockRepository;

    @GetMapping
    public List<Stock> getStocks(@RequestParam(value = "client_id", required = false) String clientId) {
        if (clientId == null) {
            return stockRepository.findAll();
        }
        return stockRepository.findByClientId(clientId);
    }

    @PostMapping
    public Stock createStock(@RequestBody Stock stock) {
        return stockRepository.save(stock);
    }
} 