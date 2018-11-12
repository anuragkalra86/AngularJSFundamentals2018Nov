'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'AngularJs boot camp',
            date: '02/30/2018',
            time: '10:03 AM',
            location: {
                street: '4 Easton oval',
                city: 'Columbus',
                state: 'OH'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Mastery of directives',
                    createrName: 'Bob',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'random text about directives',
                    upvoteCount: 5
                },
                {
                    name: 'Awesome session',
                    createrName: 'Mark',
                    duration: '2 hrs',
                    level: 'Bgeinner',
                    abstract: 'actually boring session',
                    upvoteCount: 10
                },
                {
                    name: 'Wrap up session',
                    createrName: 'Jon',
                    duration: '3 hr',
                    level: 'Inter',
                    abstract: 'Party time now',
                    upvoteCount: 15
                }
            ]

        };
        $scope.upvoted = function (session) {
            session.upvoteCount += 1;
        }
        $scope.downvoted = function (session) {
            session.upvoteCount -= 1;
        }

    });

