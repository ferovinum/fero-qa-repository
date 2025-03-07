package com.ferovinum.repository;

import com.ferovinum.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StockRepository extends JpaRepository<Stock, Long> {
    List<Stock> findByClientId(String clientId);
} 