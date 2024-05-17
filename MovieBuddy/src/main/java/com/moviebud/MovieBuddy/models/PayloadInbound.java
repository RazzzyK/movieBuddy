package com.moviebud.MovieBuddy.models;

import java.util.List;

public class PayloadInbound {
    private List<Movie> watchedList;
    private List<Movie> pendingList;

    // Getters and setters
    public List<Movie> getWatchedList() {
        return watchedList;
    }

    public void setWatchedList(List<Movie> watchedList) {
        this.watchedList = watchedList;
    }

    public List<Movie> getPendingList() {
        return pendingList;
    }

    public void setPendingList(List<Movie> pendingList) {
        this.pendingList = pendingList;
    }
}
